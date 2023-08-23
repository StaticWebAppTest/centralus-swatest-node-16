module.exports = async function (context, req) {
  const date = "2023-08-23T09:08:40.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

