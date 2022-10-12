module.exports = async function (context, req) {
  const date = "2022-10-12T19:17:26.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

