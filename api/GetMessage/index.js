module.exports = async function (context, req) {
  const date = "2023-07-23T09:07:55.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

