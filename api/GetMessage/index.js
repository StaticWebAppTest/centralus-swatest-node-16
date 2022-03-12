module.exports = async function (context, req) {
  const date = "2022-03-12T19:08:25.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

