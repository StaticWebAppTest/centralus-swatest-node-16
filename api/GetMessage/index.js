module.exports = async function (context, req) {
  const date = "2023-01-15T14:07:45.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

