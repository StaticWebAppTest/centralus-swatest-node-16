module.exports = async function (context, req) {
  const date = "2022-09-28T04:11:43.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

