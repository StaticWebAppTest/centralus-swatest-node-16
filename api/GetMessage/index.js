module.exports = async function (context, req) {
  const date = "2022-12-30T11:07:43.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

