module.exports = async function (context, req) {
  const date = "2023-10-16T09:09:45.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

