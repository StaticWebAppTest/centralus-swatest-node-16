module.exports = async function (context, req) {
  const date = "2022-04-25T08:14:20.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

