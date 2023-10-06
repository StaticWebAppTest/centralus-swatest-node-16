module.exports = async function (context, req) {
  const date = "2023-10-06T08:11:45.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

