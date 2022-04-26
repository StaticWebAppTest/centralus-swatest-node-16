module.exports = async function (context, req) {
  const date = "2022-04-26T11:09:40.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

