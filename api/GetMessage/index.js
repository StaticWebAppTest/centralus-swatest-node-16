module.exports = async function (context, req) {
  const date = "2022-11-11T19:09:16.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

