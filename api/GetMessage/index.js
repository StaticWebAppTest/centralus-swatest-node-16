module.exports = async function (context, req) {
  const date = "2022-03-19T03:10:09.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

