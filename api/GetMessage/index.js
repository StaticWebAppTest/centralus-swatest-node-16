module.exports = async function (context, req) {
  const date = "2022-05-28T23:11:17.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

