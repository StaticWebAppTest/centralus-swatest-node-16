module.exports = async function (context, req) {
  const date = "2023-10-19T09:09:18.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

