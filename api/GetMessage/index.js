module.exports = async function (context, req) {
  const date = "2022-10-11T14:26:54.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

