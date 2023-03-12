module.exports = async function (context, req) {
  const date = "2023-03-12T08:11:33.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

