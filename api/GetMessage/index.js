module.exports = async function (context, req) {
  const date = "2022-06-25T20:11:23.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

