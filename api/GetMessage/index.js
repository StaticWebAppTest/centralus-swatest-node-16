module.exports = async function (context, req) {
  const date = "2022-03-15T20:11:09.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

