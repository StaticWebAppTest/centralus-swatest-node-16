module.exports = async function (context, req) {
  const date = "2022-07-30T11:09:44.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

