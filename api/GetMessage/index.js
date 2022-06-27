module.exports = async function (context, req) {
  const date = "2022-06-27T11:10:00.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

