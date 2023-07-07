module.exports = async function (context, req) {
  const date = "2023-07-07T18:12:23.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

