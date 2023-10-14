module.exports = async function (context, req) {
  const date = "2023-10-14T09:07:50.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

