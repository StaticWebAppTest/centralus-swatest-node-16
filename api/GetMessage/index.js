module.exports = async function (context, req) {
  const date = "2024-05-21T09:11:19.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

