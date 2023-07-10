module.exports = async function (context, req) {
  const date = "2023-07-10T22:09:25.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

