module.exports = async function (context, req) {
  const date = "2022-02-28T16:14:18.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

