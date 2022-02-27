module.exports = async function (context, req) {
  const date = "2022-02-27T03:10:00.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

