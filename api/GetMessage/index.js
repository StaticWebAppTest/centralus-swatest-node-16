module.exports = async function (context, req) {
  const date = "2023-10-28T09:07:50.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

