module.exports = async function (context, req) {
  const date = "2023-10-07T09:07:40.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

