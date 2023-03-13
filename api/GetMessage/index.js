module.exports = async function (context, req) {
  const date = "2023-03-13T19:07:52.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

