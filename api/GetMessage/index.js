module.exports = async function (context, req) {
  const date = "2022-04-28T14:12:18.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

