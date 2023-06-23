module.exports = async function (context, req) {
  const date = "2023-06-23T05:09:40.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

