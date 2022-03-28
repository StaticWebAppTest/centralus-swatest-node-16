module.exports = async function (context, req) {
  const date = "2022-03-28T05:09:44.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

