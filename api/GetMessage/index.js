module.exports = async function (context, req) {
  const date = "2022-05-25T04:23:30.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

