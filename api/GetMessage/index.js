module.exports = async function (context, req) {
  const date = "2023-03-16T14:09:44.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

