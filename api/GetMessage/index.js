module.exports = async function (context, req) {
  const date = "2023-12-10T20:09:10.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

