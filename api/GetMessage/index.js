module.exports = async function (context, req) {
  const date = "2022-10-04T13:50:45.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

