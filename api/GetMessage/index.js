module.exports = async function (context, req) {
  const date = "2022-04-08T07:11:09.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

