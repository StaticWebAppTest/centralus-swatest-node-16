module.exports = async function (context, req) {
  const date = "2023-06-28T09:10:15.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

