module.exports = async function (context, req) {
  const date = "2022-04-04T11:09:33.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

