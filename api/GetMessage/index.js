module.exports = async function (context, req) {
  const date = "2023-05-25T11:07:15.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

