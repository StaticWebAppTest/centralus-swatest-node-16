module.exports = async function (context, req) {
  const date = "2023-10-04T08:12:18.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

