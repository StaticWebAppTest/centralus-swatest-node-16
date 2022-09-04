module.exports = async function (context, req) {
  const date = "2022-09-04T19:09:03.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

