module.exports = async function (context, req) {
  const date = "2022-10-28T23:13:35.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

