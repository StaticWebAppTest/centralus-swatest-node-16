module.exports = async function (context, req) {
  const date = "2023-05-10T09:09:01.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

