module.exports = async function (context, req) {
  const date = "2022-09-11T09:11:09.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

