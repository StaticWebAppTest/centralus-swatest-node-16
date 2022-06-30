module.exports = async function (context, req) {
  const date = "2022-06-30T11:09:01.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

