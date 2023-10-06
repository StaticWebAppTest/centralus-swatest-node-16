module.exports = async function (context, req) {
  const date = "2023-10-06T09:08:45.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

