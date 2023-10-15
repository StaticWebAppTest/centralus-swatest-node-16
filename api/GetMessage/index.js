module.exports = async function (context, req) {
  const date = "2023-10-15T09:07:51.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

