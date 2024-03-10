module.exports = async function (context, req) {
  const date = "2024-03-10T09:08:07.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

