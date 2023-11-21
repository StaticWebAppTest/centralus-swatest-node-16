module.exports = async function (context, req) {
  const date = "2023-11-21T18:12:23.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

