module.exports = async function (context, req) {
  const date = "2022-05-11T11:08:36.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

