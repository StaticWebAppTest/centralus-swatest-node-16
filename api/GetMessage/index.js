module.exports = async function (context, req) {
  const date = "2022-10-16T14:13:50.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

