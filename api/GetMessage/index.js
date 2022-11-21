module.exports = async function (context, req) {
  const date = "2022-11-21T13:35:42.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

